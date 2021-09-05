# SCALES
Major
C   D   E   F   G   A   B   C
  2   2   1   2   2   2   1

Minor (Natural)
C   D   Eb  F   G   Ab  Bb  C
  2   1   2   2   1   2   2

Minor (Harmonic)
C   D   Eb  F   G   Ab  B   C
  2   1   1   2   1   3   1

Minor (Melodic)
C   D   Eb  F   G   A   B   C
  2   1   2   2   2   2   1

If I played this key
F#

I know that it's:
1st on F# all
2nd on E all
3rd on D major
3rd on D# minorAll
4th on C# all
5th on B all
6th on A major, A minorMel
6th on A# minorNat and minorHmo
7th on G major, minorHmo and minorMel
7th on G# major, minorNat

so there are 28 scales that could work with one note

# CHORDS

CDEFG A  B
13568 10 12
                  semitones     notation         keys
Cmajor            1   5   8      i   iii   v      C   E   G
        (diff)      4   3          2     2          2   2
                                  mj3   mn3
                  semitones         notation               keys
Cmaj7             1   5   8   12     i   iii   v   vii       C   E   G   B
        (diff)      4   3   4          2     2   2             2   2   2
                                      mj3   mn3  mj3

Cmaj7 inv 1       5   8   12  1      iii   v   vii   i       E   G   B   C
        (diff)      3   4   1           2    3     2           2   2   1
                                       mn3  mj3   mn2
(or Emin aug 5
if it exists)

if you play a minor on top of a major, you get a seventh?
cadences play some chords in an order, like punct in a sentence
playful cadence 4 -> 1

vertical vs                     horizontal harmony
sounds good together            sounds good after

markov chain
state machines for cadence
ideas like coop racing games

Cmaj7 inv 2       8   12  1  5     iii   v   vii   i       E   G   B   C
        (diff)      4   1  4         2    3     2           2   2   1
                                       mn3  mj3   mn2

Cmaj7 inv 3       12  1  5  8      iii   v   vii   i       E   G   B   C
        (diff)      1  4  3         2    3     2           2   2   1
                                       mn3  mj3   mn2


Cmajor inv 1      5   8   1      iii   v   i      E   G   C
        (diff)      3   5           2    3           2   3
                                   mn3  pf4

Cmajor inv 2      8   1   5      v   iii   i      G   C   E
        (diff)      5   4          3     2          3   2
                                  pf4   mj3

Cminor            1   4   8      i   iiim  v      C   Eb  G
        (diff)      3   4          2-    2+         2-  2+
                                  mn3   mj3    

Cminor inv 1      4   8   1      iiim  v   i      Eb  G   C
        (diff)      4   5           2+   3          2+  3
                                  mn3   pf4

Cminor inv 2      8   1   4      v   i   iiim     G   C   Eb
        (diff)      5   3          3    2-          3   2-
                                  pf4   mn3

Relationships
4  3  ->  Major
3  5  ->  Major inv 1
5  4  ->  Major inv 2
3  4  ->  Minor
4  5  ->  Minor inv 1
5  3  ->  Minor inv 2

                  half notes     notation         keys
Gmajor            8   12  3      i   iii   v      G   B   D
(-7 then % 12)    1   5   8   
        (diff)      4   3          2     2          2   2

Gmajor inv 1      12  3   8      iii   v   i      B   D   G
(-7 then % 12)    5   8   1
        (diff)      3   5            2   3          2   3

Gmajor inv 2 =    3   12  8      v   iii   i      D   G   B
(-7 then % 12)    8   5   1
        (diff)      5   4          3     2          3   2


so for any chords not Cmajor,
subtract the number with (root position - 1),
then mod by 12