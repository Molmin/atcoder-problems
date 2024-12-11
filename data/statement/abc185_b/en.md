Score : $200$ points

## Problem Statement

The battery of Takahashi's smartphone has $N$ mAh capacity. At time $0.5$, $1.5$, $2.5$, and so on (that is, at time $n + 0.5$ for every integer $n$), the battery charge decreases by $1$ mAh.<br>
Takahashi will leave his house with his phone fully charged at time $0$, visit a cafe $M$ times, and return home at time $T$.<br>
He will stay at the $i$-th cafe from time $A_i$ to time $B_i$. During this stay, he charges his phone, so the battery charge does not decrease. Instead, at time $n + 0.5$ for every integer $n$, it increases by $1$. However, if it is already equal to the battery capacity, it does not increase nor decrease.<br>
Determine whether he can return home without the battery charge dropping to $0$ on the way.

## Constraints

- $1 \le N \le 10^9$
- $1 \le M \le 1000$
- $1 \le T \le 10^9$
- $0 \lt A_1 \lt B_1 \lt A_2 \lt B_2 \lt A_3 \lt B_3 \lt \dots \lt A_M \lt B_M \lt T$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $T$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $A_3$ $B_3$
> 
> $\hspace{15pt} \vdots$
> 
> $A_M$ $B_M$

## Output

If Takahashi can return home without the battery charge dropping to $0$ on the way, print `Yes`; otherwise, print `No`.

```input1
10 2 20
9 11
13 17
```

```output1
Yes
```

The battery charge changes as follows:

- Time $0$ (leaving home): $10$ mAh
- Time $9$ (the beginning of the stay at the first cafe): $1$ mAh
- Time $11$ (the end of the stay at the first cafe): $3$ mAh (He charges his phone in a cafe.)
- Time $13$ (the beginning of the stay at the second cafe): $1$ mAh
- Time $17$ (the end of the stay at the second cafe): $5$ mAh
- Time $20$ (getting home): $2$ mAh

During this process, the battery charge never drops to $0$, so we print `Yes`.

```input2
10 2 20
9 11
13 16
```

```output2
No
```

This case is the same as Sample Input/Output 1 until he starts his stay at the second cafe with $1$ mAh charge.<br>
When he ends his stay there at time $16$, the battery charge is $4$ mAh.<br>
Then at time $19.5$, it drops to $0$, so we print `No`.

```input3
15 3 30
5 8
15 17
24 27
```

```output3
Yes
```

The battery charge drops to $1$ mAh when he gets home, but it never drops to $0$ on the way.

```input4
20 1 30
20 29
```

```output4
No
```

The battery charge drops to $0$ at time $19.5$.

```input5
20 1 30
1 10
```

```output5
No
```

Note that when the battery charge is equal to the battery capacity, staying at a cafe does not increase the battery charge.