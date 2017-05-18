# vue-fuse

> A Vue.js pluggin for fuzzy search library, Fuse.js

## Props
<table>
  <tr>
    <th>Property</th>
    <th>Desc</th>
    <th>Type</th>
    <th>Default values</th>
  </tr>
  <tr>
    <td>eventName</td>
    <td>give a name to the event emitted when the search results are updated</td>
    <td>String</td>
    <td>fuseResultsUpdated</td>
  </tr>
  <tr>
    <td>defaultAll</td>
    <td>If true, results will inclide ALL items in list when search is null. If false, results will inclide no items when search is null.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>list</td>
    <td>The array of items that Fuse will search</td>
    <td>Array</td>
    <td></td>
  </tr>
  <tr>
    <td>caseSensitive</td>
    <td>Indicates whether comparisons should be case sensitive.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>includeScore</td>
    <td>Whether the score should be included in the result set. A score of 0 indicates a perfect match, while a score of 1 indicates a complete mismatch.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
   <tr>
    <td>includeMatches</td>
    <td>Whether the matches should be included in the result set. When true, each record in the result set will include the indices of the matched characters: indices: [start, end]. These can consequently be used for highlighting purposes.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>minMatchCharLength</td>
    <td>When set to include matches, only the matches whose length exceeds this value will be returned. (For instance, if you want to ignore single character index returns, set to 2)</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>shouldSort</td>
    <td>Whether to sort the result list, by score.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>tokenize</td>
    <td>When true, the algorithm will search individual words and the full string, computing the final score as a function of both. In this case, the threshold, distance, and location are inconsequential for individual tokens, and are thus ignored.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>matchAllTokens</td>
    <td>When true, the result set will only include records that match all tokens. Will only work if tokenize is also true.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>findAllMatches</td>
    <td>When true, the matching function will continue to the end of a search pattern even if a perfect match has already been located in the string.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>id</td>
    <td>The name of the identifier property. If specified, the returned result will be a list of the items' identifiers, otherwise it will be a list of the items.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>keys</td>
    <td>List of properties that will be searched. This supports nested properties, weighted search, searching in arrays of strings and objects</td>
    <td>Array</td>
    <td></td>
  </tr>
  <tr>
    <td>location</td>
    <td>Determines approximately where in the text is the pattern expected to be found.</td>
    <td>Number</td>
    <td>0</td>
  </tr>
  <tr>
    <td>threshold</td>
    <td>At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.</td>
    <td>Number</td>
    <td>0.6</td>
  </tr>
  <tr>
    <td>distance</td>
    <td>Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified, a distance of 1000 would require a perfect match to be within 800 characters of the location to be found using a threshold of 0.8.</td>
    <td>Number</td>
    <td>100</td>
  </tr>
  <tr>
    <td>maxPatternLength</td>
    <td>The maximum length of the pattern. The longer the pattern (i.e. the search query), the more intensive the search operation will be. Whenever the pattern exceeds the maxPatternLength, an error will be thrown. </td>
    <td>Number</td>
    <td>32</td>
  </tr>
</table>

## Example

```
<template>
    <vue-fuse :keys="keys" :list="list" :defaultAll="false" :eventName="bike-search-results-changed"></vue-fuse>
</template>

<script>
export default {
  data () {
    return {
      bikes: [
        {
          brand: "Schwinn",
          model: {
            name: "Classic",
            id: "1345"
          }
        },
        {
          brand: "Red Line",
          model: {
            name: "Flight",
            id: "5430"
          }
        },
        {
          brand: "Hoffman",
          model: {
            name: "Condore",
            id: "0543"
          }
        },
        {
          brand: "Tribe",
          model: {
            name: "CRMO",
            id: "0432"
          }
        }
      ]
      keys: ["brand", "model.name", "model.id"]
    }
  }
}
</script>
```
