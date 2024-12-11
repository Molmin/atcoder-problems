Score : $200$ points

## Problem Statement

Given is an integer $N$.

Is it possible to add zero or more `0`s at the beginning of the string representing $N$ in base ten to get a palindrome?

## Constraints

- $0 \leq N \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If a palindrome can be made, print `Yes`; otherwise, print `No`.

```input1
1210
```

```output1
Yes
```

Adding one `0` at the beginning of `1210` results in `01210`, a palindrome.

```input2
777
```

```output2
Yes
```

`777` is already a palindrome.

```input3
123456789
```

```output3
No
```