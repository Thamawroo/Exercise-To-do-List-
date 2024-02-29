import React, { useState } from 'react';
import { ChakraProvider, Container, Heading, Input, Button, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const App: React.FC = () => {
  const [chores, setChores] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddChore = () => {
    if (inputValue.trim() !== '') {
      setChores([...chores, inputValue]);
      setInputValue('');
    }
  };

  const handleToggleChore = (index: number) => {
    const updatedChores = [...chores];
    updatedChores[index] = updatedChores[index].startsWith('✓ ') ?
      updatedChores[index].slice(2) :
      '✓ ' + updatedChores[index];
    setChores(updatedChores);
  };

  const handleRemoveChore = (index: number) => {
    const updatedChores = [...chores];
    updatedChores.splice(index, 1);
    setChores(updatedChores);
  };

  const completedChoresCount = chores.filter(chore => chore.startsWith('✓ ')).length;

  return (
    <ChakraProvider>
      <Container mt={5} bg="#C2D3B4" p={5} borderRadius="lg" boxShadow="md">
        <Heading textAlign="center" mb={4}>Chores To-do List</Heading>
        {chores.map((chore, index) => (
          <div key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <Checkbox
              isChecked={chore.startsWith('✓ ')}
              onChange={() => handleToggleChore(index)}
              mr={2}
            />
            <Text className={chore.startsWith('✓ ') ? 'completed' : ''}>{chore}</Text>
            <IconButton
              aria-label="Delete"
              icon={<DeleteIcon />}
              onClick={() => handleRemoveChore(index)}
              ml="auto"
            />
          </div>
        ))}
        <Text textAlign="center" mt={4}>Done : {completedChoresCount}</Text>
        <Input
          type="text"
          placeholder="Input Chores"
          value={inputValue}
          onChange={handleInputChange}
          mt={4}
        />
        <Button colorScheme="blue" onClick={handleAddChore} mt={2}>
          Add Chores
        </Button>
      </Container>
    </ChakraProvider>
  );
};

export default App;
