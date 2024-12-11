Score : $300$ points

## Problem Statement

There are $N$ competitive programmers numbered person $1$, person $2$, $\ldots$, and person $N$.<br>
There is a relation called **superiority** between the programmers.  For all pairs of distinct programmers $($person $X$, person $Y$$)$, exactly one of the following two relations holds: "person $X$ is stronger than person $Y$" or "person $Y$ is stronger than person $X$."<br>
The superiority is **transitive**.  In other words, for all triplets of distinct programmers $($person $X$, person $Y$, person $Z$$)$, it holds that:

- if person $X$ is stronger than person $Y$ and person $Y$ is stronger than person $Z$, then person $X$ is stronger than person $Z$.

A person $X$ is said to be the **strongest programmer** if person $X$ is stronger than person $Y$ for all people $Y$ other than person $X$.  (Under the constraints above, we can prove that there is always exactly one such person.)  

You have $M$ pieces of information on their superiority.  The $i$-th of them is that "person $A_i$ is stronger than person $B_i$."<br>
Can you determine the strongest programmer among the $N$ based on the information?<br>
If you can, print the person's number.  Otherwise, that is, if there are multiple possible strongest programmers, print `-1`.

## Constraints

- $2 \leq N \leq 50$
- $0 \leq M \leq \frac{N(N-1)}{2}$
- $1 \leq A_i, B_i \leq N$
- $A_i \neq B_i$
- If $i \neq j$, then $(A_i, B_i) \neq (A_j, B_j)$.
- There is at least one way to determine superiorities for all pairs of distinct programmers, that is consistent with the given information.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

If you can uniquely determine the strongest programmer, print the person's number; otherwise, print `-1`.

```input1
3 2
1 2
2 3
```

```output1
1
```

You have two pieces of information: "person $1$ is stronger than person $2$" and "person $2$ is stronger than person $3$."<br>
By the transitivity, you can also infer that "person $1$ is stronger than person $3$," so person $1$ is the strongest programmer.

```input2
3 2
1 3
2 3
```

```output2
-1
```

Both person $1$ and person $2$ may be the strongest programmer.  Since you cannot uniquely determine which is the strongest, you should print `-1`.

```input3
6 6
1 6
6 5
6 2
2 3
4 3
4 2
```

```output3
-1
```