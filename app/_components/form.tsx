'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from './ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const router = useRouter();

  const togglePassword = () => setShowPassword((preview) => !preview);
  const validatePassword = (password: string) => password.length >= 8;
  const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return false;

    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string; password?: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!validatePassword(password)) {
      newErrors.password = 'A senha deve ter no mínimo 8 caracteres.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push('/home');
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold text-[#CC6237]">E-mail</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seunome@seuservidor.com"
          className="h-10 w-full rounded-full bg-[#F5F5F5] pr-10 pl-4 text-gray-500 placeholder:text-gray-400 focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="text-sm font-semibold text-[#CC6237]">
          Senha
        </label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite aqui"
            className="h-10 w-full rounded-full bg-[#F5F5F5] pr-10 pl-4 text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-[#B8542F]"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
      </div>

      <Button type="submit" className="h-10 w-full rounded-full text-sm font-medium">
        Enviar
      </Button>
    </form>
  );
}
