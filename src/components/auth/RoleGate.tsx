'use client'

import { UserRole } from '@prisma/client'

import { useCurrentRole } from '@/auth/hooks/useCurrentRole'
import { FormError } from '@/components/FormError'

interface RoleGateProps {
  children: React.ReactNode
  allowedRole: UserRole
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole()

  if (role !== allowedRole) {
    return (
      <FormError message='You do not have permission to view this content!' />
    )
  }

  return <>{children}</>
}
