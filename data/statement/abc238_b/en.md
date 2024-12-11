Score : $200$ points

## Problem Statement

We have a circular pizza.<br>
Takahashi will cut this pizza using a sequence $A$ of length $N$, according to the following procedure.

- First, make a cut from the center in the $12$ o'clock direction.
- Next, do $N$ operations. The $i$-th operation is as follows.-   - Rotate the pizza $A_i$ degrees clockwise.
-   - Then, make a cut from the center in the $12$ o'clock direction.

For example, if $A=(90,180,45,195)$, the procedure cuts the pizza as follows.

![](https://img.atcoder.jp/ghi/AWP_pict.png)

Find the center angle of the largest pizza after the procedure.

## Constraints

- All values in input are integers.
- $1 \le N \le 359$
- $1 \le A_i \le 359$
- There will be no multiple cuts at the same position.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
4
90 180 45 195
```

```output1
120
```

This input coincides with the example in the Problem Statement.<br>
The center angle of the largest pizza is $120$ degrees.

```input2
1
1
```

```output2
359
```

```input3
10
215 137 320 339 341 41 44 18 241 149
```

```output3
170
```