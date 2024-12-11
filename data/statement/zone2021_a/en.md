Score : $100$ points

## Problem Statement

You are given a string $S$ of length $12$. How many occurrences of `ZONe`s does it contain as contiguous substrings?

## Constraints

- $S$ is a string of length $12$ consisting of English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
abcdZONefghi
```

```output1
1
```

The $5$-th through $8$-th characters of $S$ form a `ZONe`.

```input2
ZONeZONeZONe
```

```output2
3
```

```input3
helloAtZoner
```

```output3
0
```

The $8$-th through $11$-th characters of $S$ form a `Zone`, which is not a `ZONe`.