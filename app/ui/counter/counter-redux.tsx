'use client';
import React from 'react'
import type { RootState } from '@/app/lib/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/app/features/counter/counter-slice'

export function CounterRedux() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="btn btn-primary"
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="btn btn-primary"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}