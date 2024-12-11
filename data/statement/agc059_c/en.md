Score : $1100$ points

## Problem Statement

A teacher has a hidden permutation $P=(P_1,P_2,\ldots,P_N)$ of $(1,2,\cdots,N)$.
You are going to determine it.

To do this, you prepared a sequence of pairs of integers $(A_1,B_1),(A_2,B_2),\ldots,(A_{N(N-1)/2},B_{N(N-1)/2})$; this is a permutation of all pairs of the form $(a,b)$ ($1 \le a &lt; b \le N$).
Now, you will go over the pairs from the beginning. For a pair $(A_i, B_i)$, you will ask if $P_{A_i}&lt;P_{B_i}$, and the teacher will tell you the answer.
However, you will skip this question if you can already determine the answer to it from previous answers.

Find the number of permutations $P$, for which with your algorithm you will have to ask all $\frac{N(N-1)}{2}$ questions, modulo $10^9+7$.

## Constraints

- $2 \le N \leq 400$
- $1 \le A_i &lt; B_i \le N$
- $(A_i,B_i) \neq (A_j,B_j)$ ($i \neq j$)
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{N(N-1)/2}$ $B_{N(N-1)/2}$

## Output

Print the answer.

```input1
2
1 2
```

```output1
2
```

Clearly, for any permutation $P$, you need to ask $1$ question.

```input2
4
1 2
1 3
2 3
2 4
3 4
1 4
```

```output2
4
```

Consider $P=(2,3,1,4)$ as an example.
In this case, you will skip the third question since you know $P_1 &lt; P_2$ and $P_1 &gt; P_3$ from previous questions and you can determine $P_2 &gt; P_3$.
Therefore, $P=(2,3,1,4)$ should not be counted.

```input3
5
1 2
2 3
3 4
4 5
1 5
1 3
2 4
3 5
1 4
2 5
```

```output3
0
```