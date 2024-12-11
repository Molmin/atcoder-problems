配点 : $425$ 点

## 問題文

$H$ 行 $W$ 列のグリッド状に分割されたフィールドがあります。<br>
北 (上側) から $i$ 行目、西 (左側) から $j$ 列目のマスは文字 $A_{i, j}$ で表されます。各文字の意味は次の通りです。

- `.` : 空きマス。進入できる。
- `#` : 障害物。進入できない。
- `&amp;gt;`, `v`, `&amp;lt;`, `^` : それぞれ東・南・西・北を向いている人がいるマス。進入できない。人の視線は $1$ マス分の幅を持ち、人が向いている方向にまっすぐ伸び、障害物や別の人に遮られる。(入出力例 $1$ にある説明も参考にしてください。)
- `S` : スタート地点。進入できる。ちょうど $1$ ヵ所だけ存在する。人の視線に入っていないことが保証される。
- `G` : ゴール地点。進入できる。ちょうど $1$ ヵ所だけ存在する。人の視線に入っていないことが保証される。

ナオヒロくんはスタート地点にいて、東西南北への $1$ マス分の移動を好きな回数行えます。ただし、進入できないマスへの移動やフィールドの外への移動はできません。<br>
彼が人の視線に一度も入らずにゴール地点に到達できるか判定して、できる場合はそのために最小で何回の移動が必要か求めてください。

## 制約

- $2 \leq H, W \leq 2000$
- $A_{i,j}$ は `.`, `#`, `&amp;gt;`, `v`, `&amp;lt;`, `^`, `S`, `G` のいずれかである
- `S`, `G` は $A_{i, j}$ の中にちょうど $1$ 回ずつ現れる
- スタート地点・ゴール地点はともに人の視線に入っていない

## 入力

入力は以下の形式で標準入力から与えられる。

> $H$ $W$
> 
> $A_{1,1}A_{1,2}\dots A_{1,W}$
> 
> $A_{2,1}A_{2,2}\dots A_{2,W}$
> 
> $\vdots$
> 
> $A_{H,1}A_{H,2}\dots A_{H,W}$

## 出力

ナオヒロ君が人の視線に一度も入らずにゴール地点に到達できる場合は、そのために必要な(最小の)移動回数を出力せよ。できない場合は `-1` を出力せよ。

```input1
5 7
....Sv.
.>.....
.......
>..<.#<
^G....>
```

```output1
15
```

入力例 $1$ について、$1$ 人以上の視線に入っている空きマスを `!` で表すと次の図のようになります。

![image2](https://img.atcoder.jp/abc317/8a40fc4c621cfef326cc25a1f69c0300.jpg)

いくつかのマスについて具体的に説明すると次のようになります。(ここで、北から $i$ 行目、西から $j$ 列目のマスを $(i, j)$ と表します。)

- $(2, 4)$ は $(2, 2)$ にいる東を向いている人からの視線に入っているマスである。
- $(2, 6)$ は $(2, 2)$ にいる東を向いている人と $(1, 6)$ にいる南を向いている人の $2$ 人の視線に入っているマスである。
- $(4, 5)$ は誰の視線にも入っていないマスである。$(4, 7)$ にいる西を向いている人の視線は $(4, 6)$ の障害物に遮られていて、$(4, 1)$ にいる東を向いている人の視線は $(4, 4)$ の人に遮られている。

ナオヒロ君は進入できないマス・視線に入っているマスのどちらも通らずにゴール地点へ行く必要があります。

```input2
4 3
S..
.<.
.>.
..G
```

```output2
-1
```

ナオヒロ君がゴール地点に到達できない場合は `-1` を出力してください。