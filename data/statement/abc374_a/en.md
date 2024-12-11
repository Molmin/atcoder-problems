Score : $100$ points

## Problem Statement

KEYENCE has a culture of addressing everyone with the suffix "-san," regardless of roles, age, or positions.

You are given a string $S$ consisting of lowercase English letters.<br>
If $S$ ends with `san`, print `Yes`; otherwise, print `No`.

## Constraints

- $S$ is a string of length between $4$ and $30$, inclusive, consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

If $S$ ends with `san`, print `Yes`; otherwise, print `No`.

```input1
takahashisan
```

```output1
Yes
```

The string $S=$ `takahashisan` ends with `san`, so print `Yes`.

```input2
aokikun
```

```output2
No
```

The string $S=$ `aokikun` does not end with `san`, so print `No`.