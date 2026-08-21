import { Button, Modal, MultiSelect, PasswordInput, Select, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { ArrowUpRight, Camera, Computer, Laptop, Plus, Shovel, Star } from 'lucide-react'
import React from 'react'

const MantineUi = () => {
      const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>

 <Button disabled variant="light" color="red" size="sm" radius="xl">Button</Button> 
     <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>

     <TextInput
      label="Full Name"
             leftSectionPointerEvents="none"
        leftSection={<Laptop/>}
        rightSection = {<Shovel/>}
  
      placeholder="Enter your full name"
      withAsterisk
      
    />
    <Camera className='text-red-400' />
    <Star />

    <Computer/>
    <Laptop/>
    <ArrowUpRight />


      <PasswordInput
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    />

     <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['html', 'css', 'javascript', 'express']}
      clearable
      searchable
    />

      <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />


   <Modal opened={opened} onClose={close} title="Modal title goes here">
     This is some modal content
      </Modal>

         <Button variant="default" onClick={open}>
        Open modal
      </Button>

      <Button  onClick={open} leftSection={<Plus/>}>Add expense</Button>

   </div>
  )
}

export default MantineUi