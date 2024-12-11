Score : $400$ points

## Problem Statement

Your computer has a keyboard with three keys: 'a' key, Shift key, and Caps Lock key.  The Caps Lock key has a light on it.
Initially, the light on the Caps Lock key is off, and the screen shows an empty string.

You can do the following three actions any number of times in any order:

- Spend $X$ milliseconds to press only the 'a' key.  If the light on the Caps Lock key is off, `a` is appended to the string on the screen; if it is on, `A` is.
- Spend $Y$ milliseconds to press the 'a' key and Shift key simultaneously.  If the light on the Caps Lock key is off, `A` is appended to the string on the screen; if it is on, `a` is.
- Spend $Z$ milliseconds to press the Caps Lock key.  If the light on the Caps Lock key is off, it turns on; if it is on, it turns off.

Given a string $S$ consisting of `A` and `a`, determine at least how many milliseconds you need to spend to make the string shown on the screen equal to $S$.

## Constraints

- $1 \leq X,Y,Z \leq 10^9$
- $X$, $Y$, and $Z$ are integers.
- $1 \leq |S| \leq 3 \times 10^5$
- $S$ is a string consisting of `A` and `a`.

## Input

The input is given from Standard Input in the following format:

> $X$ $Y$ $Z$
> 
> $S$

## Output

Print the answer.

```input1
1 3 3
AAaA
```

```output1
9
```

The following sequence of actions makes the string on the screen equal to `AAaA` in $9$ milliseconds, which is the shortest possible.

- Spend $Z(=3)$ milliseconds to press the CapsLock key.  The light on the Caps Lock key turns on.
- Spend $X(=1)$ milliseconds to press the 'a' key.  `A` is appended to the string on the screen.
- Spend $X(=1)$ milliseconds to press the 'a' key.  `A` is appended to the string on the screen.
- Spend $Y(=3)$ milliseconds to press the Shift key and 'a' key simultaneously.  `a` is appended to the string on the screen.
- Spend $X(=1)$ milliseconds to press the 'a' key.  `A` is appended to the string on the screen.

```input2
1 1 100
aAaAaA
```

```output2
6
```

```input3
1 2 4
aaAaAaaAAAAaAaaAaAAaaaAAAAA
```

```output3
40
```