import { memo } from 'react'
import NonMemoComponent from './NonMemoComponent.tsx'

export const MemoizedComponent = memo(NonMemoComponent)
