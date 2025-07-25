import { Button } from "@/components/ui/button"
import PatientForm from "@/components/forms/PatientForm"
import Image from "next/image"
import Link from "next/link"
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = async ({ searchParams }: SearchParamProps) => {
  const resolvedSearchParams = await searchParams;  // make it async for the Next.js update
  const isAdmin = searchParams?.admin === "true";

  return (  // these are all from globals
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto"> 
        <div className="sub-container max-w-[496px]">
          {/* the logo is here */}
          {/* <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width= {1000}
            alt="patient"
            className="mb-12 h10 w-fit"
          /> */}
          
          <PatientForm/>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 PandaClinic
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width= {1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  )
}

export default Home;