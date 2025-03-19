Score : $200$ points

## Problem Statement

There is a stack of $100$ cards, each labeled with the integer $0$.

Process $Q$ queries. Each query is of one of the following:

- Type $1$: Place a card labeled with an integer $x$ on top of the stack.
- Type $2$: Remove the top card of the stack and output the integer written on that removed card. Under the constraints of this problem, the stack always has at least one card.

## Constraints

- $1 \le Q \le 100$
- $1 \le x \le 100$
- There is at least one query of type $2$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $Q$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

The $i$-th query $\text{query}_i$ starts with the query type $c_i$ ($1$ or $2$), followed by the integer $x$ if $c_i=1$.

That is, each query is in one of the following two formats:

> $1$ $x$

> $2$

## Output

Let $q$ be the number of queries with $c_i=2$. Print $q$ lines.

The $j$-th line ($1 \le j \le q$) should contain the answer to the $j$-th such query.

```input1
6
2
1 4
1 3
2
2
2
```

```output1
0
3
4
0
```

After processing each query, the stack is as follows:

- Remove the top card of the stack. The integer on the removed card is $0$, so output $0$.-   - The stack then has $99$ cards labeled with $0$.
- Add a card labeled $4$ on top.-   - The stack then has $1$ card labeled $4$, and $99$ cards labeled $0$, from top to bottom.
- Add a card labeled $3$ on top.-   - The stack then has $1$ card labeled $3$, $1$ card labeled $4$, and $99$ cards labeled $0$, from top to bottom.
- Remove the top card. The integer on that card is $3$, so output $3$.-   - The stack then has $1$ card labeled $4$, and $99$ cards labeled $0$, from top to bottom.
- Remove the top card. The integer on that card is $4$, so output $4$.-   - The stack then has $99$ cards labeled $0$.
- Remove the top card. The integer on that card is $0$, so output $0$.-   - The stack then has $98$ cards labeled $0$.

```input2
5
2
2
2
2
2
```

```output2
0
0
0
0
0
```