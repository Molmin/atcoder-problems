Score : $500$ points

## Problem Statement

There are $N$ towns
numbered Town $1$, Town $2$, $\ldots$, Town $N$.<br>
There are also $M$ *Teleporters*, each of which connects two towns bidirectionally so that a person can travel from one to the other in one minute.

The $i$-th Teleporter connects Town $U_i$ and Town $V_i$ bidirectionally.
However, for some of the Teleporters, one of the towns it connects is undetermined;
$U_i=0$ means that one of the towns the $i$-th Teleporter connects is Town $V_i$,
but the other end is undetermined.

For $i=1,2,\ldots,N$, answer the following question.

When the Teleporters with undetermined ends are all determined to be connected to Town $i$,
how many minutes is required at minimum to travel from Town $1$ to Town $N$?
If it is impossible to travel from Towns $1$ to $N$ using Teleporters only, print $-1$ instead.

## Constraints

- $2 \leq N \leq 3\times 10^5$
- $1\leq M\leq 3\times 10^5$
- $0\leq U_i&lt;V_i\leq N$
- If $i \neq j$, then $(U_i,V_i)\neq (U_j,V_j)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print $N$ integers, with spaces in between.
The $k$-th integer should be the answer to the question when $i=k$.

```input1
3 2
0 2
1 2
```

```output1
-1 -1 2
```

When the Teleporters with an undetermined end are all determined to be connected to Town $1$,<br>
the $1$-st and the $2$-nd Teleporters both connect Towns $1$ and $2$.
Then, it is impossible to travel from Town $1$ to Town $3$.

When the Teleporters with an undetermined end are all determined to be connected to Town $2$,<br>
the $1$-st Teleporter connects Town $2$ and itself, and the $2$-nd one connects Towns $1$ and $2$.
Again, it is impossible to travel from Town $1$ to Town $3$.

When the Teleporters with an undetermined end are all determined to be connected to Town $3$,<br>
the $1$-st Teleporter connects Town $3$ and Town $2$, and the $2$-nd one connects Towns $1$ and $2$.
In this case, we can travel from Town $1$ to Town $3$ in two minutes.

- Use the $2$-nd Teleporter to travel from Town $1$ to Town $2$.
- Use the $1$-st Teleporter to travel from Town $2$ to Town $3$.

Therefore, $-1,-1$, and $2$ should be printed in this order.

Note that, depending on which town the Teleporters with an undetermined end are connected to,
there may be a Teleporter that connects a town and itself,
or multiple Teleporters that connect the same pair of towns.

```input2
5 5
1 2
1 3
3 4
4 5
0 2
```

```output2
3 3 3 3 2
```