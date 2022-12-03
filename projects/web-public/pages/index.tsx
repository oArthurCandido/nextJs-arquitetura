import React from 'react';
import { sum } from "@alura/utils/math/sum"
import { Text } from "@alura/design-system/components/Text"

export default function HomeScreen() {
  return (
    <div>
      <Text tag={'h1'}>Home</Text>
      <Text tag={'p'}>Importando módulo local: @alura/utils/math/sum sum(2,2): {sum(2, 2)}</Text>
    </div>
  )
}
