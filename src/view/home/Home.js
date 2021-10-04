import React, { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import * as RNLocalize from 'react-native-localize';

import { LangContext } from '../../lang/LangProvider';
import { LANGUAGES } from '../../lang/constants';

export default function HomeView() {
  const [lang, handleChangeLanguage] = useContext(LangContext);
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        {JSON.stringify(RNLocalize.getLocales().map(ln => ln.languageTag))}
      </Text>
      <Text>{JSON.stringify(RNLocalize.getCurrencies())}</Text>
      <Text>
        <FormattedMessage id={'test'} />
      </Text>
      <Button title={'PL'} onPress={() => handleChangeLanguage(LANGUAGES.PL)} />
      <Button title={'EN'} onPress={() => handleChangeLanguage(LANGUAGES.EN)} />
      <Text>{lang}</Text>
    </SafeAreaView>
  );
}
