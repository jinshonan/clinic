import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

import * as Sentry from '@sentry/nextjs'

const Register = async ({ params }: SearchParamProps) => {
    const { userId } = await params;  // breaking change warning for Next.js 15
    const user = await getUser(userId);

    // seems not working
    // Sentry.metrics.set("user_view_reg", user.name);

    return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container"> 
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            {/* the logo is here */}
            {/* <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width= {1000}
              alt="patient"
              className="mb-12 h10 w-fit"
            /> */}
            
            <RegisterForm user={user} />

            <p className="copyright py-12">
                © 2025 PandaClinic
            </p>

          </div>
        </section>
        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width= {1000}
          alt="patient"
          className="side-img max-w-[390px]"
        />
    </div>
    )
}

export default Register