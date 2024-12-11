Score : $100$ points

## Problem Statement

You are given a string $S$ of length $3$ consisting of `a`, `b` and `c`. Determine if $S$ can be obtained by permuting `abc`.

## Constraints

- $|S|=3$
- $S$ consists of `a`, `b` and `c`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ can be obtained by permuting `abc`, print `Yes`; otherwise, print `No`.

```input1
bac
```

```output1
Yes
```

Swapping the first and second characters in `bac` results in `abc`.

```input2
bab
```

```output2
No
```

```input3
abc
```

```output3
Yes
```

```input4
aaa
```

```output4
No
```