Score : $100$ points

## Problem Statement

As a New Year's gift, Dolphin received a string $s$ of length $19$.<br>
The string $s$ has the following format: `[five lowercase English letters],[seven lowercase English letters],[five lowercase English letters]`.<br>
Dolphin wants to convert the comma-separated string $s$ into a space-separated string.<br>
Write a program to perform the conversion for him.  

## Constraints

- The length of $s$ is $19$.
- The sixth and fourteenth characters in $s$ are `,`.
- The other characters in $s$ are lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

Print the string after the conversion.

```input1
happy,newyear,enjoy
```

```output1
happy newyear enjoy
```

Replace all the commas in `happy,newyear,enjoy` with spaces to obtain `happy newyear enjoy`.

```input2
haiku,atcoder,tasks
```

```output2
haiku atcoder tasks
```

```input3
abcde,fghihgf,edcba
```

```output3
abcde fghihgf edcba
```