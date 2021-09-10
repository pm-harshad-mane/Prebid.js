# pubmaticAutoRefresh
- This module will work with GPT only.
- The module will refresh the GPT ad-slots as per the given config.
- Before refreshing GPT ad-slot, respective PBJS AdUnit is found by the module and new bids are fetched by PBJS and then the GPT ads-lot is refreshed, with a failsafe.


# Config
| Param               | Data type | Default value | Usage |
|---------------------|-----------|----------------|------------------------------------------|
| enabled             | boolean   | false          | must be set to true to enable the module |
| maximumRefreshCount | int       | 3              | how many times the slot must be refreshed after it is rendered for the first time |
| countdownDuration   | int       | 30000          | time in milliseconds|
| startCountdownWithMinimumViewabilityPercentage | int (0-100) | 0 | the countDown will start when ad-slot will have viewability percenatge more than this. When set to 0 the count-down will start after rendering the creative, even when ad slot is not viewable. |
| refreshAdSlotWithMinimumViewabilityPercentag | int | 0 (0-100)| the ad slot will be refreshed only if it has viewability percenathge more than this value. When set to 0 the ad-slot will be refreshed even if it is not viewable|
| kvKeyForRefresh | string | 'autorefresh' | this key will be added on gptSlot with kvValueForRefresh value; set it to null to not set it |
| kvValueForRefresh | string | '1' | this value will be added for the key kvKeyForRefresh on the gptSlot |
| kvKeyForRefreshCount | string | 'autorefreshcount' | this key will be added on the gptSlot and its value will be the refresh count; set it to null to not set it |
| slotIdFunctionForCustomConfig | function | `(gpttSlot) => gptSlot.getSlotElementId()` | a function; if you are using customConfig for some gptSlots then we need a way to find name of the gptSlot in customConfig |
| callbackFunction | function | `(gptSlotName, gptSlot, pbjsAdUnit, KeyValuePairs) => { performs pbjs auction, sets kvs, refreshes GPT slot}` | the default callback function, if you set own callback function then you will need to take care of initiating Prebid auction, setting KVs and refresing GPT slot |
| gptSlotToPbjsAdUnitMapFunction | function | `(gptSlot) => (gptSlot.getAdUnitPath() === pbjsAU.code || gptSlot.getSlotElementId() === pbjsAU.code)` | this function will help find the GPT gptSlots matching PBJS AdUnit |
| excludeCallbackFunction | function | `(gptSlotName, gptSlot) => { return true if gptSlotName is found in config.excludeSlotIds else return true if gptSlot size is found in config.excludeSizes else return false }` | if this function returns true then we will ignore the gptSlot and not try to refresh it |
| excludeSlotIds | array of strings | undefined | in excludeCallbackFunction we will look into this array for gptSlotId if found then the gptSlot will be ignored |
| excludeSizes | array of strings | undefined | in excludeCallbackFunction we will look into this array for gptSlot size WxH (300x250) if found then the gptSlot will be ignored |
| customConfig | Object | undefined | if you want to have seperate value for any of the following supported configs for any gptAdSlot then you can enter it here. Supported custom configs ` maximumRefreshCount, countdownDuration, startCountdownWithMinimumViewabilityPercentage, refreshAdSlotWithMinimumViewabilityPercentag, kvKeyForRefresh, kvValueForRefresh, kvKeyForRefreshCount, callbackFunction, gptSlotToPbjsAdUnitMapFunction, excludeCallbackFunction ` Example: `{ 'Div-1' : { maximumRefreshCount: 5 }, 'Div-Top-1': { countdownDuration: 50000 } }` |


# Use Cases

- Refresh all GPT ad-slots after every 20 seconds
```
pbjs.setConfig({
    'pubmaticAutoRefresh': {
        enabled: true,
        countdownDuration: 20000
    }
});

```

- Refresh all GPT ad-slots after 20 seconds, maximum 2 times
```
pbjs.setConfig({
    'pubmaticAutoRefresh': {
        enabled: true,
        countdownDuration: 20000,
        maximumRefreshCount: 2
    }
});

```

- Refresh all GPT ad-slots after every 20 seconds but only if GPT ad-slot is in view
```
pbjs.setConfig({
    'pubmaticAutoRefresh': {
        enabled: true,
        countdownDuration: 20000,
        refreshAdSlotWithMinimumViewabilityPercentag: 100 // or set to 50 for partially visible        
    }
});
```


- Refresh all GPT ad-slots but only after the slot is viewed by user, refresh after 20 seconds
```
pbjs.setConfig({
    'pubmaticAutoRefresh': {
        enabled: true,
        countdownDuration: 20000,
        startCountdownWithMinimumViewabilityPercentage: 100 // or set to 50 for partially visible        
    }
});
```

- Refresh all GPT ad-slots but only after the slot is viewed by user, refresh after 20 seconds but when GPT ad-slot is in view
```
pbjs.setConfig({
    'pubmaticAutoRefresh': {
        enabled: true,
        countdownDuration: 20000,
        startCountdownWithMinimumViewabilityPercentage: 100, // or set to 50 for partially visible  
        refreshAdSlotWithMinimumViewabilityPercentag: 100 // or set to 50 for partially visible              
    }
});
```

- Do not refresh GPT slot rendering in Div `DIV-100`
```
pbjs.setConfig({
    'pubmaticAutoRefresh': {
        enabled: true,
        excludeSlotIds: [ 'Div-100']
    }
});
```



- Apply same config for all GPT ad-slots but want to have different config for some slots

- Add key-value pairs to the GPT ad-slots before refreshing to notify the count of refresh impression

- Callback function to take control of refreshing

- Exclusion list based on GPT ad-slot ID and GPT ad-slot sizes
- Provision for custom exclusion function


- Refresh all GPT ad-slots after it is viewed by user, refresh after 30 seconds but when GPT ad-slot is in view

# Drwaback
- only onle slot is handled at a time