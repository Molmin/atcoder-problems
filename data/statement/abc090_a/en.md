Score : $100$ points

## Problem Statement

We have a $3 \times 3$ square grid, where each square contains a lowercase English letters.
The letter in the square at the $i$-th row from the top and $j$-th column from the left is $c_{ij}$.

Print the string of length $3$ that can be obtained by concatenating the letters in the squares on the diagonal connecting the top-left and bottom-right corner of the grid, from the top-left to bottom-right.

## Constraints

- Input consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $c_{11}c_{12}c_{13}$
> 
> $c_{21}c_{22}c_{23}$
> 
> $c_{31}c_{32}c_{33}$

## Output

Print the string of length $3$ that can be obtained by concatenating the letters on the diagonal connecting the top-left and bottom-right corner of the grid, from the top-left to bottom-right.

```input1
ant
obe
rec
```

```output1
abc
```

The letters in the squares on the diagonal connecting the top-left and bottom-right corner of the grid are `a`, `b` and `c` from top-right to bottom-left. Concatenate these letters and print `abc`.

```input2
edu
cat
ion
```

```output2
ean
```