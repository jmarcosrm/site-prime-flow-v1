import { lazy, Suspense } from 'react';
import type { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export type IconName = keyof typeof dynamicIconImports;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  className?: string;
  strokeWidth?: number | string;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(() => dynamicIconImports[name]());

  return (
    <Suspense fallback={null}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
