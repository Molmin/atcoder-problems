Score : $100$ points

## Problem Statement

Given is a $2 \times 2$ matrix $A = \begin{bmatrix} a &amp; b \\ c &amp; d \end{bmatrix}$.<br>
The determinant of $A$ can be found as $ad-bc$.<br>
Find it.

## Constraints

- All values in input are integers.
- $-100 \le a, b, c, d \le 100$

## Input

Input is given from Standard Input in the following format:

> $a$ $b$
> 
> $c$ $d$

## Output

Print the answer as an integer.

```input1
1 2
3 4
```

```output1
-2
```

The determinant of $\begin{bmatrix} 1 &amp; 2 \\ 3 &amp; 4 \end{bmatrix}$ is $1 \times 4 - 2 \times 3 = -2$.

```input2
0 -1
1 0
```

```output2
1
```

```input3
100 100
100 100
```

```output3
0
```