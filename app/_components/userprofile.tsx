'use client';

import React from 'react';
import Image from 'next/image';
import Perfil from '@/public/imagem 1.png';

interface UserProfileProps {
  name: string;
  role: string;
}

export default function UserProfile({ name, role }: UserProfileProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-3xl border-2 border-orange-500 p-1">
        <Image src={Perfil} alt={name} className="h-14 w-14 rounded-3xl object-cover" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-black">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
