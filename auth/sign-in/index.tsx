// 🔑 Sign-in form — username/password with Google reCAPTCHA v3 + JWT tokens
// Source: ADAM business-fe (partial sample for verification)

import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Form, Modal, Typography } from "antd";
import type { FormProps } from "antd";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import type { SignInFieldType, SignInResponse } from "./type";
import { apiClient } from "~shared/lib/api-client";
import { setAccessToken, setRefreshToken } from "~shared/lib";
import { UserQueryKeys } from "~entities/user";
import { handleError } from "~shared/lib";
import { FloatInput, FloatInputPassword } from "~shared/ui";

export const SignIn = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);
  const [forgotPasswordForm] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish: FormProps<SignInFieldType>["onFinish"] = async (data) => {
    if (!executeRecaptcha) {
      handleError(new Error(t("recaptcha_not_loaded")));
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaToken = await executeRecaptcha("login");

      if (!recaptchaToken) {
        handleError(new Error(t("recaptcha_verify_failed")));
        setIsSubmitting(false);
        return;
      }

      const res = await apiClient.post<SignInResponse>(
        "/accounts/login/",
        {
          ...data,
          recaptcha_token: recaptchaToken,
        },
      );
      setAccessToken(res.data.access);
      setRefreshToken(res.data.refresh);
      queryClient.invalidateQueries({ queryKey: [UserQueryKeys.Profile] });

      router.navigate({ to: "/" });
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-[400px]">
        <Typography.Title
          level={2}
          className="text-[28px] font-semibold text-center mb-8"
        >
          {t("auth.sign_in")}
        </Typography.Title>
        <Form
          name="basic"
          layout="vertical"
          style={{ maxWidth: 400, gap: 20 }}
          onFinish={onFinish}
          autoComplete="off"
          className="w-full flex flex-col gap-5"
        >
          <Form.Item<SignInFieldType>
            name="username"
            rules={[{ required: true, message: t("auth.enter_username") }]}
          >
            <FloatInput label={t("auth.username")} />
          </Form.Item>

          <Form.Item<SignInFieldType>
            name="password"
            rules={[{ required: true, message: t("auth.enter_password") }]}
          >
            <FloatInputPassword label={t("auth.password")} />
          </Form.Item>
          <div
            className="text-primary text-xs cursor-pointer w-fit -mt-6"
            onClick={() => setIsForgotPasswordModalOpen(true)}
          >
            {t("forgot_password")}
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="h-11 rounded-xl text-[15px]"
            block
            loading={isSubmitting}
            disabled={!executeRecaptcha || isSubmitting}
          >
            {t("auth.submit")}
          </Button>
        </Form>

        <Modal
          open={isForgotPasswordModalOpen}
          onCancel={() => {
            setIsForgotPasswordModalOpen(false);
            forgotPasswordForm.resetFields();
          }}
          footer={null}
          destroyOnHidden
          width={421}
        >
          <div className="flex flex-col items-center">
            <div className="text-[#0A0A0A] font-semibold text-[20px] mt-[23px]">
              {t("forgot_password_text")}
            </div>
            <div className="text-gray-4 mt-2">{t("contact_admin")}</div>
            <a
              href="tel:+998712007007"
              className="flex py-[9px] px-4 items-center gap-2 rounded-[40px] bg-gray-2 mt-7"
            >
              <div className="text-black font-medium">+998 71 200 70 07</div>
            </a>
            <div className="mt-2 text-xs text-black">
              {t("support_phone_number")}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
