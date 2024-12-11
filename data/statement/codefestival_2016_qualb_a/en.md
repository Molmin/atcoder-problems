Score : $100$ points

## Problem Statement

CODE FESTIVAL 2016 is going to be held. For the occasion, Mr. Takahashi decided to make a signboard.

He intended to write `CODEFESTIVAL2016` on it, but he mistakenly wrote a different string $S$. Fortunately, the string he wrote was the correct length.

So Mr. Takahashi decided to perform an operation that replaces a certain character with another in the minimum number of iterations, changing the string to `CODEFESTIVAL2016`.

Find the minimum number of iterations for the rewrite operation.

## Constraints

- $S$ is $16$ characters long.
- $S$ consists of uppercase and lowercase alphabet letters and numerals.

## Input

Inputs are provided from Standard Input in the following form.

> $S$

## Output

Output an integer representing the minimum number of iterations needed for the rewrite operation.

```input1
C0DEFESTIVAL2O16
```

```output1
2
```

The second character `0` must be changed to `O` and the $14$th character `O` changed to `0`.

```input2
FESTIVAL2016CODE
```

```output2
16
```