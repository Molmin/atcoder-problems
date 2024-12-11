Score: $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters and the character `.`.<br>
Print the last substring when $S$ is split by `.`s.<br>
In other words, print the longest suffix of $S$ that does not contain `.`.

## Constraints

- $S$ is a string of length between $2$ and $100$, inclusive, consisting of lowercase English letters and `.`.
- $S$ contains at least one `.`.
- $S$ does not end with `.`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
atcoder.jp
```

```output1
jp
```

The longest suffix of `atcoder.jp` that does not contain `.` is `jp`.

```input2
translate.google.com
```

```output2
com
```

$S$ may contain multiple `.`s.

```input3
.z
```

```output3
z
```

$S$ may start with `.`.

```input4
..........txt
```

```output4
txt
```

$S$ may contain consecutive `.`s.