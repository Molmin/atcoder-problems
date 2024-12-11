Score : $300$ points

## Problem Statement

A sequence $a_1,a_2,... ,a_n$ is said to be /\/\/\/ when the following conditions are satisfied:

- For each $i = 1,2,..., n-2$, $a_i = a_{i+2}$.
- Exactly two different numbers appear in the sequence.

You are given a sequence $v_1,v_2,...,v_n$ whose length is even.
We would like to make this sequence /\/\/\/ by replacing some of its elements.
Find the minimum number of elements that needs to be replaced.

## Constraints

- $2 \leq n \leq 10^5$
- $n$ is even.
- $1 \leq v_i \leq 10^5$
- $v_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $v_1$ $v_2$ $...$ $v_n$

## Output

Print the minimum number of elements that needs to be replaced.

```input1
4
3 1 3 2
```

```output1
1
```

The sequence $3,1,3,2$ is not /\/\/\/, but we can make it /\/\/\/ by replacing one of its elements: for example, replace the fourth element to make it $3,1,3,1$.

```input2
6
105 119 105 119 105 119
```

```output2
0
```

The sequence $105,119,105,119,105,119$ is /\/\/\/.

```input3
4
1 1 1 1
```

```output3
2
```

The elements of the sequence $1,1,1,1$ are all the same, so it is not /\/\/\/.