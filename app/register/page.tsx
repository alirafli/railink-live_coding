import RegisterForm from "./components/RegisterForm";

export default function Register() {
  return (
    <div>
      <h1 className="pl-8 scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl mb-8">
        Buat Akun Baru
      </h1>
      <RegisterForm />
    </div>
  );
}
