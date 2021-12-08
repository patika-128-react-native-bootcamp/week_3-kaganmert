import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {menuItems} from './MenuItems';
import styles from './MenuDetail.styles';

export default function MenuDetail() {
  const renderIngredients = item => {
    return (
      <View style={styles.badge_container}>
        <Text style={styles.badge_label}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {menuItems.map(f => {
          return (
            <Text style={styles.label}>
              {f.label} {f.labelData}
            </Text>
          );
        })}
        <View style={styles.ingredients}>
          {fd.ingredients.split(',').map(renderIngredients)}
        </View>
      </View>
    </SafeAreaView>
  );
}
