import { useState, useEffect, useCallback } from 'react'


export const useDragAndDropImage = ({ onChange, dragRef } : any) => {
  const [isDragging, setIsDragging] = useState(false)
  const handleDragIn = useCallback((e : any) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragOut = useCallback((e : any) => {
    e.preventDefault()
    e.stopPropagation()

    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e : any) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer.files) {
      setIsDragging(true)
    }
  }, [])

  const handleDrop = useCallback((e : any) => {
    e.preventDefault()
    e.stopPropagation()
    onChange(e)
    setIsDragging(false)
  }, [onChange])

  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn)
      dragRef.current.addEventListener('dragleave', handleDragOut)
      dragRef.current.addEventListener('dragover', handleDragOver)
      dragRef.current.addEventListener('drop', handleDrop)
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

  const resetDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn)
      dragRef.current.removeEventListener('dragleave', handleDragOut)
      dragRef.current.removeEventListener('dragover', handleDragOver)
      dragRef.current.removeEventListener('drop', handleDrop)
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

  useEffect(() => {
    initDragEvents()
    return () => resetDragEvents()
  }, [initDragEvents, resetDragEvents])

  return isDragging
}