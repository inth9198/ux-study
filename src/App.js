import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// 유효성 검사 스키마
const schema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[A-Za-z]+$/, "알파벳만 입력해주세요")
    .required("이름은 필수입니다"),
  email: yup
    .string()
    .email("유효한 이메일 주소를 입력하세요")
    .required("이메일은 필수입니다"),
  password: yup
    .string()
    .matches(/^[A-Za-z]+$/, "알파벳만 입력해주세요")
    .min(6, "비밀번호는 최소 6자 이상이어야 합니다")
    .required("비밀번호는 필수입니다"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인은 필수입니다"),
  phone: yup.string().required("전화번호는 필수입니다"),
});

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="이름"
                error={!!errors.username}
                helperText={errors.username?.message}
                fullWidth
                margin="normal"
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="이메일"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                margin="normal"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="비밀번호"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                margin="normal"
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="비밀번호 확인"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => {
              field.value = field.value?.replace(/\D/g, "");
              return (
                <TextField
                  {...field}
                  label="전화번호"
                  type="email"
                  helperText={errors.phone?.message || "숫자만 입력하세요"}
                  fullWidth
                  margin="normal"
                />
              );
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "16px",
              flexDirection: isDesktop ? "row" : "column",
              paddingTop: "8px",
            }}
          >
            <Button variant="contained" color="primary" fullWidth>
              취소
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isValid}
              fullWidth
            >
              회원가입
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default SignUpForm;
