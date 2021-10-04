import React, { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { LangContext } from '../../lang/LangProvider';
import { LANGUAGES } from '../../lang/constants';

export default function HomeView() {
  const [, handleChangeLanguage] = useContext(LangContext);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        <FormattedMessage id={'test'} />
      </Text>
      <Button title={'PL'} onPress={() => handleChangeLanguage(LANGUAGES.PL)} />
      <Button title={'EN'} onPress={() => handleChangeLanguage(LANGUAGES.EN)} />
    </SafeAreaView>
  );
}
