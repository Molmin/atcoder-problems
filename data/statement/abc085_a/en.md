Score : $100$ points

## Problem Statement

On some day in January $2018$, Takaki is writing a document. The document has a column where the current date is written in `yyyy/mm/dd` format. For example, January $23$, $2018$ should be written as `2018/01/23`.

After finishing the document, she noticed that she had mistakenly wrote `2017` at the beginning of the date column. Write a program that, when the string that Takaki wrote in the date column, $S$, is given as input, modifies the first four characters in $S$ to `2018` and prints it.

## Constraints

- $S$ is a string of length $10$.
- The first eight characters in $S$ are `2017/01/`.
- The last two characters in $S$ are digits and represent an integer between $1$ and $31$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Replace the first four characters in $S$ with `2018` and print it.

```input1
2017/01/07
```

```output1
2018/01/07
```

```input2
2017/01/31
```

```output2
2018/01/31
```