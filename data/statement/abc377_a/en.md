Score : $100$ points

## Problem Statement

You are given a string $S$ of length $3$ consisting of uppercase English letters.

Determine whether it is possible to rearrange the characters in $S$ to make it match the string `ABC`.

## Constraints

- $S$ is a string of length $3$ consisting of uppercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print `Yes` if it is possible to rearrange the characters in $S$ to make it match the string `ABC`, and `No` otherwise.

```input1
BAC
```

```output1
Yes
```

You can make $S$ match `ABC` by swapping the first and second characters of $S$.

```input2
AAC
```

```output2
No
```

You cannot make $S$ match `ABC` no matter how you rearrange the characters.

```input3
ABC
```

```output3
Yes
```

```input4
ARC
```

```output4
No
```