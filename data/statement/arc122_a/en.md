Score : $400$ points

## Problem Statement

You are given a sequence of $N$ non-negative integers: $A_1,A_2,\cdots,A_N$.

Consider inserting a `+` or `-` between each pair of adjacent terms to make one formula.

There are $2^{N-1}$ such ways to make a formula. Such a formula is called **good** when the following condition is satisfied:

- `-` does not occur twice or more in a row.

Find the sum of the evaluations of all good formulae.
We can prove that this sum is always a non-negative integer, so print it modulo $(10^9+7)$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the sum modulo $(10^9+7)$.

```input1
3
3 1 5
```

```output1
15
```

We have the following three good formulae:

- <p>$3+1+5=9$</p>
- <p>$3+1-5=-1$</p>
- <p>$3-1+5=7$</p>

Note that $3-1-5$ is not good since`-` occurs twice in a row in it.
Thus, the answer is $9+(-1)+7=15$.

```input2
4
1 1 1 1
```

```output2
10
```

We have the following five good formulae:

- <p>$1+1+1+1=4$</p>
- <p>$1+1+1-1=2$</p>
- <p>$1+1-1+1=2$</p>
- <p>$1-1+1+1=2$</p>
- <p>$1-1+1-1=0$</p>

Thus, the answer is $4+2+2+2+0=10$.

```input3
10
866111664 178537096 844917655 218662351 383133839 231371336 353498483 865935868 472381277 579910117
```

```output3
279919144
```

Print the sum modulo $(10^9+7)$.