Score : $200$ points

## Problem Statement

We have a string $S$ of length $N$ consisting of uppercase English letters.

How many times does `ABC` occur in $S$ as contiguous subsequences (see Sample Inputs and Outputs)?

## Constraints

- $3 \leq N \leq 50$
- $S$ consists of uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print number of occurrences of `ABC` in $S$ as contiguous subsequences.

```input1
10
ZABCDBABCQ
```

```output1
2
```

Two contiguous subsequences of $S$ are equal to `ABC`: the $2$-nd through $4$-th characters, and the $7$-th through $9$-th characters.

```input2
19
THREEONEFOURONEFIVE
```

```output2
0
```

No contiguous subsequences of $S$ are equal to `ABC`.

```input3
33
ABCCABCBABCCABACBCBBABCBCBCBCABCB
```

```output3
5
```