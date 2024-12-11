Score : $500$ points

## Problem Statement

There are $N$ cards called card $1$, card $2$, $\ldots$, card $N$. On card $i$ $(1\leq i\leq N)$, an integer $A_i$ is written.

For $K=1, 2, \ldots, N$, solve the following problem.

We have a bag that contains $K$ cards: card $1$, card $2$, $\ldots$, card $K$.<br>
Let us perform the following operation twice, and let $x$ and $y$ be the numbers recorded, in the recorded order.

Draw a card from the bag uniformly at random, and record the number written on that card. Then, **return the card to the bag**.

Print the expected value of $\max(x,y)$, modulo $998244353$ (see Notes).<br>
Here, $\max(x,y)$ denotes the value of the greater of $x$ and $y$ (or $x$ if they are equal).

## Notes

It can be proved that the sought expected value is always finite and rational. Additionally, under the Constraints of this problem, when that value is represented as $\frac{P}{Q}$ with two coprime integers $P$ and $Q$, it can be proved that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$. Print this $R$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 2\times 10^5$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print $N$ lines. The $i$-th line $(1\leq i\leq N)$ should contain the answer to the problem for $K=i$.

```input1
3
5 7 5
```

```output1
5
499122183
443664163
```

For instance, the answer for $K=2$ is found as follows.

The bag contains card $1$ and card $2$, with $A_1=5$ and $A_2=7$ written on them, respectively.

- If you draw card $1$ in the first draw and card $1$ again in the second draw, we have $x=y=5$, so $\max(x,y)=5$.
- If you draw card $1$ in the first draw and card $2$ in the second draw, we have $x=5$ and $y=7$, so $\max(x,y)=7$.
- If you draw card $2$ in the first draw and card $1$ in the second draw, we have $x=7$ and $y=5$, so $\max(x,y)=7$.
- If you draw card $2$ in the first draw and card $2$ again in the second draw, we have $x=y=7$, so $\max(x,y)=7$.

These events happen with the same probability, so the sought expected value is $\frac{5+7+7+7}{4}=\frac{13}{2}$.
We have $499122183\times 2\equiv 13 \pmod{998244353}$, so $499122183$ should be printed.

```input2
7
22 75 26 45 72 81 47
```

```output2
22
249561150
110916092
873463862
279508479
360477194
529680742
```