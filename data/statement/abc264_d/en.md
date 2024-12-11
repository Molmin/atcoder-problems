Score : $400$ points

## Problem Statement

You are given a string $S$ that is a permutation of `atcoder`.<br>
On this string $S$, you will perform the following operation $0$ or more times:

- Choose two adjacent characters of $S$ and swap them.

Find the minimum number of operations required to make $S$ equal `atcoder`.

## Constraints

- $S$ is a string that is a permutation of `atcoder`

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer as an integer.

```input1
catredo
```

```output1
8
```

You can make $S$ equal `atcoder` in $8$ operations as follows:<br>
`catredo` $\rightarrow$ `[ac]tredo` $\rightarrow$  `actre[od]`  $\rightarrow$ `actr[oe]d`  $\rightarrow$ `actro[de]` $\rightarrow$ `act[or]de` $\rightarrow$ `acto[dr]e` $\rightarrow$ `a[tc]odre` $\rightarrow$ `atcod[er]`<br>
This is the minimum number of operations achievable.

```input2
atcoder
```

```output2
0
```

In this case, the string $S$ is already `atcoder`.

```input3
redocta
```

```output3
21
```