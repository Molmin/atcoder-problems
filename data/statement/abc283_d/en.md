Score : $400$ points

## Problem Statement

A string consisting of lowercase English letters, `(`, and `)` is said to be a **good string** if you can make it an empty string by the following procedure:

- First, remove all lowercase English letters.
- Then, repeatedly remove consecutive `()` while possible.

For example, `((a)ba)` is a good string, because removing all lowercase English letters yields `(())`, from which we can remove consecutive `()` at the $2$-nd and $3$-rd characters to obtain `()`, which in turn ends up in an empty string.  

You are given a good string $S$.
We denote by $S_i$ the $i$-th character of $S$.

For each lowercase English letter `a`, `b`, $\ldots$, and `z`, we have a ball with the letter written on it.
Additionally, we have an empty box.

For each $i = 1,2,$ $\ldots$ $,|S|$ in this order, Takahashi performs the following operation unless he faints.

- If $S_i$ is a lowercase English letter, put the ball with the letter written on it into the box.  If the ball is already in the box, he faints.
- If $S_i$ is `(`, do nothing.
- If $S_i$ is `)`, take the maximum integer $j$ less than $i$ such that the $j$-th through $i$-th characters of $S$ form a good string.  (We can prove that such an integer $j$ always exists.)  Take out from the box all the balls that he has put in the $j$-th through $i$-th operations.

Determine if Takahashi can complete the sequence of operations without fainting.

## Constraints

- $1 \leq |S| \leq 3 \times 10^5$
- $S$ is a good string.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print `Yes` if he can complete the sequence of operations without fainting; print `No` otherwise.

```input1
((a)ba)
```

```output1
Yes
```

For $i = 1$, he does nothing.<br>
For $i = 2$, he does nothing.<br>
For $i = 3$, he puts the ball with `a` written on it into the box.<br>
For $i = 4$, $j=2$ is the maximum integer less than $4$ such that the $j$-th through $4$-th characters of $S$ form a good string, so he takes out the ball with `a` written on it from the box.<br>
For $i = 5$, he puts the ball with `b` written on it into the box.<br>
For $i = 6$, he puts the ball with `a` written on it into the box.<br>
For $i = 7$, $j=1$ is the maximum integer less than $7$ such that the $j$-th through $7$-th characters of $S$ form a good string, so he takes out the ball with `a` written on it, and another with `b`, from the box.

Therefore, the answer to this case is `Yes`.

```input2
(a(ba))
```

```output2
No
```

For $i = 1$, he does nothing.<br>
For $i = 2$, he puts the ball with `a` written on it into the box.<br>
For $i = 3$, he does nothing.<br>
For $i = 4$, he puts the ball with `b` written on it into the box.<br>
For $i = 5$, the ball with `a` written on it is already in the box, so he faints, aborting the sequence of operations.

Therefore, the answer to this case is `No`.

```input3
(((())))
```

```output3
Yes
```

```input4
abca
```

```output4
No
```