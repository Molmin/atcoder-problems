Score: $600$ points

## Problem Statement

How many strings can be obtained by applying the following operation on a string $S$ exactly $K$ times: "choose one lowercase English letter and insert it somewhere"?

The answer can be enormous, so print it modulo $(10^9+7)$.

## Constraints

- $K$ is an integer between $1$ and $10^6$ (inclusive).
- $S$ is a string of length between $1$ and $10^6$ (inclusive) consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $S$

## Output

Print the number of strings satisfying the condition, modulo $(10^9+7)$.

```input1
5
oof
```

```output1
575111451
```

For example, we can obtain `proofend`, `moonwolf`, and `onionpuf`, while we cannot obtain `oofsix`, `oofelevennn`, `voxafolt`, or `fooooooo`.

```input2
37564
whydidyoudesertme
```

```output2
318008117
```