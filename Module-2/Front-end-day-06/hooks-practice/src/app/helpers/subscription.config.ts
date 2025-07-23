import React from 'react'

import Cookie from 'js-cookie'

export function setSubscription(type: 'standard' | 'premium', days: number) {
  Cookie.set ('subscription', type, {expires: days})
}
export function getSubscription() {
  return Cookie.get('subscription')
}