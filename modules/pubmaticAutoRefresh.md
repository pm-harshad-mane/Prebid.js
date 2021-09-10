pubmaticAutoRefresh


# Config
| Param               | Data type | Default value | Usage |
|---------------------|-----------|----------------|-----------------------------------------------------------|
| countdownDuration   | int       | 30000          | time in milliseconds|
| enabled             | boolean   | false          | must be set to true to enable the module |
| maximumRefreshCount | int       | 3              | how many times the slot must be refreshed after it is rendered for the first time |

# Use Cases

- Before refreshing GPT ad-slot, respective PBJS AdUnit is found by the module and new bids are fetched by PBJS and then the GPT ads-lot is refreshed, with a failsafe.

- Refresh all GPT ad-slots after every 30 seconds
- Refresh all GPT ad-slots after 30 seconds, maximum 2 times
- Refresh all GPT ad-slots after every 30 seconds but only if GPT ad-slot is in view

- Apply same config for all GPT ad-slots but want to have different config for some slots

- Add key-value pairs to the GPT ad-slots before refreshing to notify the count of refresh impression

- Callback function to take control of refreshing

- Exclusion list based on GPT ad-slot ID and GPT ad-slot sizes
- Provision for custom exclusion function

- Refresh all GPT ad-slots after it is viewed by user, refresh after 30 seconds
- Refresh all GPT ad-slots after it is viewed by user, refresh after 30 seconds but when GPT ad-slot is in view

# Drwaback
- only onle slot is handled at a time