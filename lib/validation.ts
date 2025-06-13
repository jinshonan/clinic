import { z } from "zod";

export　const UserFormValidation = z.object({
    name: z.string()
        .min(2, "２文字以上")
        .max(10, "10文字以下"),
    email: z.string().email("正しいメールを入力してください"),
    phone: z.string().refine((phone) => /^\+\d{10, 15}$/.test(phone), "正しい電話番号を入力してください")
})