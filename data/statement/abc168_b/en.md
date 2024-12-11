Score: $200$ points

## Problem Statement

We have a string $S$ consisting of lowercase English letters.

If the length of $S$ is at most $K$, print $S$ without change.

If the length of $S$ exceeds $K$, extract the first $K$ characters in $S$, append `...` to the end of them, and print the result.

## Constraints

- $K$ is an integer between $1$ and $100$ (inclusive).
- $S$ is a string consisting of lowercase English letters.
- The length of $S$ is between $1$ and $100$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $S$

## Output

Print a string as stated in Problem Statement.

```input1
7
nikoandsolstice
```

```output1
nikoand...
```

`nikoandsolstice` has a length of $15$, which exceeds $K=7$.

We should extract the first $7$ characters in this string, append `...` to the end of them, and print the result `nikoand...`.

```input2
40
ferelibenterhominesidquodvoluntcredunt
```

```output2
ferelibenterhominesidquodvoluntcredunt
```

The famous quote from Gaius Julius Caesar.