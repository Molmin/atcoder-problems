Score : $600$ points

## Problem Statement

You are given a tuple of $N$ non-negative integers $A=(A_1,A_2,\ldots,A_N)$ such that $A_1=0$ and $A_N &gt; 0$.

Takahashi has $N$ counters. Initially, the values of all counters are $0$.<br>
He will repeat the following operation until, for every $1\leq i\leq N$, the value of the $i$-th counter is at least $A_i$.

Choose one of the $N$ counters uniformly at random and set its value to $0$. (Each choice is independent of others.)<br>
Increase the values of the **other** counters by $1$.

Print the expected value of the number of times Takahashi repeats the operation, modulo $998244353$ (see Notes).

## Notes

It can be proved that the sought expected value is always finite and rational. Additionally, under the Constraints of this problem, when that value is represented as $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, one can prove that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$. Find this $R$.

## Constraints

- $2\leq N\leq 2\times 10^5$
- $0=A_1\leq A_2\leq \cdots \leq A_N\leq 10^{18}$
- $A_N &gt; 0$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the expected value of the number of times Takahashi repeats the operation, modulo $998244353$.

```input1
2
0 2
```

```output1
6
```

Let $C_i$ denote the value of the $i$-th counter.

Here is one possible progression of the process.

- Set the value of the $1$-st counter to $0$, and then increase the value of the other counter by $1$. Now, $(C_1,C_2)=(0,1)$.
- Set the value of the $2$-nd counter to $0$, and then increase the value of the other counter by $1$. Now, $(C_1,C_2)=(1,0)$.
- Set the value of the $1$-st counter to $0$, and then increase the value of the other counter by $1$. Now, $(C_1,C_2)=(0,1)$.
- Set the value of the $1$-st counter to $0$, and then increase the value of the other counter by $1$. Now, $(C_1,C_2)=(0,2)$.

In this case, the operation is performed four times.

The probabilities that the process ends after exactly $1,2,3,4,5,\ldots$ operation(s) are $0,\frac{1}{4}, \frac{1}{8}, \frac{1}{8}, \frac{3}{32},\ldots$, respectively, so the sought expected value is $2\times\frac{1}{4}+3\times\frac{1}{8}+4\times\frac{1}{8}+5\times\frac{3}{32}+\dots=6$.
Thus, $6$ should be printed.

```input2
5
0 1 3 10 1000000000000000000
```

```output2
874839568
```