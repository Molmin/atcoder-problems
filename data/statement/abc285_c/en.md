Score : $300$ points

## Problem Statement

In a parallel universe, AtCoder holds AtCoder Big Contest, where $10^{16}$ problems are given at once.<br>
The IDs of the problems are as follows, from the $1$-st problem in order: `A`, `B`, ..., `Z`, `AA`, `AB`, ..., `ZZ`, `AAA`, ...

In other words, the IDs are given in the following order:

- the strings of length $1$ consisting of uppercase English letters, in lexicographical order;
- the strings of length $2$ consisting of uppercase English letters, in lexicographical order;
- the strings of length $3$ consisting of uppercase English letters, in lexicographical order;
- $...$

Given a string $S$ that is an ID of a problem given in this contest, find the index of the problem.  (See also Samples.)

## Constraints

- $S$ is a valid ID of a problem given in AtCoder Big Contest.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer as an integer.

```input1
AB
```

```output1
28
```

The problem whose ID is `AB` is the $28$-th problem of AtCoder Big Contest, so $28$ should be printed.

```input2
C
```

```output2
3
```

The problem whose ID is `C` is the $3$-rd problem of AtCoder Big Contest, so $3$ should be printed.

```input3
BRUTMHYHIIZP
```

```output3
10000000000000000
```

The problem whose ID is `BRUTMHYHIIZP` is the 
$10^{16}$-th (last) problem of AtCoder Big Contest, so $10^{16}$ should be printed as an integer.